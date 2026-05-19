export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="text-slate-600">
            A selection of work that combines software engineering, design, and collaboration.
          </p>
        </div>

        <div className="flex flex-col gap-8">

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">
              Promise Unlocked
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-slate-700 leading-relaxed">
              <li>
                Developed core features for a stakeholder-backed mobile application promoting a holistic,
                student-centered college admissions process, utilized by hundreds of pilot students.
              </li>
              <li>
                Built React Native user interface components, implemented multi-screen navigation, and
                integrated Firebase authentication within a collaborative development team.
              </li>
              <li>
                Created a React web application for the Administrative Dashboard, as well as a profile and
                dynamic skills passport built upon a holistic skills taxonomy.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">
              Welcome to the Zoo
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 leading-relaxed">
              <li>
                Designed custom art and iconography and developed core features for a Zoo-Themed game with the pygame library.
              </li>
              <li>
                Utilized project management techniques to effectively collaborate with team members and produce deliverables for two major releases.
              </li>
              <li>
                Built a custom rigging system to move segmented animal PNGs with rotational vectors to form nested, hierarchical animations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}