import Banner from "./Banner";
import FaqDetails from "./FaqDetails";
import PackagesDetails from "./PackagesDetails";

import "../../styles/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Suspense } from "react";
import Loader from "../components/Loader";
import Loading from "./loading";


var loadingState = false
const fetchData = async (url) => {
  try {
    loadingState = true
    const response = await fetch(
      `https://sankalpitsolutions.com/ecms/api/service_info.php?slug=${url}`
    );
    const result = await response.json();
    loadingState = false
    return result
  } catch (error) {
    console.log(error);
  }
}

export async function generateMetadata(router) {

  const data = await fetchData(router.params.service.substring(0, router.params.service.length - 5))

  return {
    title: data.data.tab_title,
    description: data.data.meta_description,
    keyword: data.data.meta_keyword
  }
}

async function page(router) {

  const service = await fetchData(router.params.service.substring(0, router.params.service.length - 5))

  // if (loadingState) {
  //   return (
  //     <section style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //       <h1 style={{ fontSize: '5rem', color: 'lightblue' }}>It's still loading.....</h1>
  //     </section>
  //   )
  // }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Banner service={service} />
        <div dangerouslySetInnerHTML={{ __html: service.data.description?.replaceAll("&amp;quot;", '"').replaceAll("&amp;#39;", "'").replaceAll("amp;", "").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("className", "class").replaceAll("classname", "class").replaceAll("&amp;nbsp;", "") }} />
        <FaqDetails service={service} />
        <PackagesDetails service={service} />
      </Suspense>
    </>
  )
}

export default page