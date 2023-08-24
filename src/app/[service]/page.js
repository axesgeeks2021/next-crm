import Banner from "./Banner";
import FaqDetails from "./FaqDetails";
import PackagesDetails from "./PackagesDetails";

import "../../styles/style.css"
import "bootstrap/dist/css/bootstrap.min.css"

const fetchData = async (url) => {
  try {
    const response = await fetch(
      `https://sankalpitsolutions.com/ecms/api/service_info.php?slug=${url}`
    );
    const result = await response.json();
    return result
  } catch (error) {
    console.log(error);
  }
}

async function page(router) {

  const service = await fetchData(router.params.service)
  return (
    <>
      <Banner service={service} />
      <div dangerouslySetInnerHTML={{ __html: service.data.description?.replaceAll("&amp;quot;", '"').replaceAll("&amp;#39;", "'").replaceAll("amp;", "").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("className", "class").replaceAll("classname", "class").replaceAll("&amp;nbsp;", "") }}></div>
      <FaqDetails service={service} />
      <PackagesDetails service={service} />
    </>
  )
}

export default page