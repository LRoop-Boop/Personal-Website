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

export default function ContactForm() {
  return (
    <div className = "min-h-screen pt-20 bg-slate-100">
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-slate-900">Contact Me</CardTitle>

          <CardDescription className="text-slate-600">
            Have a question or opportunity? Send me a message.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label className="text-slate-900" htmlFor="name">Name</Label>

              <Input
                id="name"
                className="text-slate-600"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-slate-900" htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                className="text-slate-600"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-slate-900" htmlFor="message">Message</Label>

              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                className="min-h-36 text-slate-600"
              />
            </div>

            <Button className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}