import Card from '@/components/Card';
import { projects } from '@/data/projects';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Learning Dashboard</h1>

      {/* 3 Columns x 4 Rows Grid Layout */}
      <div className="grid grid-cols-3 grid-rows-4 gap-6">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}