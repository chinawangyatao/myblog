import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return <>

      </>
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
    return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}
