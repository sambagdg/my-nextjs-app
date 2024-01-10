import prisma from '@/utils/db';

const prismahandlers = async () => {
  console.log('ceci est juste un exemple de prisma')
  // await prisma.task.create({
  //   data: {
  //     content: 'réveil toi',
  //   },
  // });

  const alltasks = await prisma.task.findMany({
    orderBy: {
      createdAT: 'desc',
    },
  })

  return alltasks;
}

const prismaExemplePage = async () => {
  const tasks = await prismahandlers()
  if (tasks.length === 0) {
    return <h2 className='mt-8 font-medium text-lg'>Pas de tâches disponile.....</h2>
  }
  return (
    <div>
      <h1 className='text-4xl'>prismaExemplePage</h1>
      {
      tasks.map((task) => {
        return (
          <h2 key={task.id} className='text-xl py-2'>
            😫{task.content}
          </h2>
        )
      })}
    </div>
  );
};
export default prismaExemplePage;
