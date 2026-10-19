
import { useState, type FormEvent } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../firebase";

import { Button } from "../../@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../@/components/ui/card";
import { Input } from "../../@/components/ui/input";
import { Label } from "../../@/components/ui/label";
import { Textarea } from "../../@/components/ui/textarea";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");
    setIsError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      setStatus("Please complete all fields.");
      setIsError(true);
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        createdAt: serverTimestamp(),
      });

      form.reset();
      setStatus("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus(
        "Sorry, your message couldn't be sent. Please try again."
      );
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 pt-20 pb-12">
      <Card className="mx-auto max-w-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-slate-900">
            Contact Me
          </CardTitle>

          <CardDescription className="text-slate-600">
            Have a question or opportunity? Send me a message.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-900">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
                maxLength={100}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-900">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                autoComplete="email"
                maxLength={254}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-900">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                className="min-h-36"
                maxLength={5000}
                required
              />
            </div>

            {status && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${
                  isError ? "text-red-600" : "text-green-700"
                }`}
              >
                {status}
              </p>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
