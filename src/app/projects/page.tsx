import { db } from '@/lib/db'

const dynamic = 'force-dynamic'
const revalidate = 0

export default async function Projects() {
    const projectsfetched = await db.project.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })

    return (
        <main className="container mx-auto py-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Projects</h1>
                {!projectsfetched || projectsfetched.length === 0 ? (
                    <div className="bg-white p-6 rounded-lg shadow">
                        <p className="text-gray-600">No projects available</p>
                    </div>
                ) : (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {projectsfetched.map((project) => (
                            <div key={project.id} className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}