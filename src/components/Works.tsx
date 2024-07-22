import WorksGridItem from './WorksGridItem'
import WorksIndexItem from './WorksIndexItem'

const Works = () => {
  return (
    <section className="works relative mt-64 w-full overflow-hidden">
      <div className="works_wrapper p-[6.4rem]">
        <div className="works_title inline-flex w-full gap-[3.2rem] border-b border-solid border-b-secondary pb-[4.8rem]">
          <h1>All My</h1>
          <h1 className="font-secondary max-md:text-[7rem]">Projects</h1>
        </div>

        <div className="works_selector relative pt-48">
          {/*--> Grid View */}
          <div className="works_grid">
            <WorksGridItem
              index={1}
              title="Flash - Studies"
              image="https://images.beta.cosmos.so/711f08c7-8246-4348-ac38-35fdcab48d39?format=jpeg"
              info={['Web Dev', 'Web Design', 'Gamification']}
            />
            <WorksGridItem
              index={2}
              title="My GCP Journey - Serverless Technology"
              image="https://images.beta.cosmos.so/345be64e-8094-43cf-b90e-f0942381d9cb?format=jpeg"
              info={['Cloud Computing', 'Serverless', 'Google Cloud Platform']}
            />
          </div>

          {/*--> Index View */}
          <div className="works_index">
            <WorksIndexItem
              title="Flash"
              subtitle="Studying can be fun"
              index={1}
              images={[
                'https://images.beta.cosmos.so/711f08c7-8246-4348-ac38-35fdcab48d39?format=jpeg',
                'https://images.beta.cosmos.so/c86d8335-fe67-4782-8235-9df7ad761229?format=jpeg',
                'https://images.beta.cosmos.so/f512db75-561b-42ac-97f2-c10cf6eccd89?format=jpeg',
                'https://images.beta.cosmos.so/db6f7d38-9ed3-47fb-8900-88bd5a5f9763?format=jpeg',
              ]}
            />
            <WorksIndexItem
              title="My GCP Journey"
              subtitle="Serverless Technology"
              index={2}
              images={[
                'https://images.beta.cosmos.so/345be64e-8094-43cf-b90e-f0942381d9cb?format=jpeg',
                'https://images.beta.cosmos.so/551a17c7-93a3-4b83-8ceb-6dd6c284a303?format=jpeg',
                'https://images.beta.cosmos.so/7baf89e6-9d7b-43cf-b1cb-103c32a90dbe?format=jpeg',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Works
