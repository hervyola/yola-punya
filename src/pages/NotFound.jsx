import ErrorPage from "../components/ErrorPage"
export default function NotFound() {
    return(
       <div>
                 <ErrorPage
                 code={403}
                 description={"There is nothing here! Please back to homepage!!!"}
                 image={"/img/kk.jpg"}
                 />
              </div>
    )
   }