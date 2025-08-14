import ErrorPage from "../components/ErrorPage"

export default function Error403() {
    return(
       <div>
          <ErrorPage
          code={403}
          description={"There is nothing here! Please back to homepage!!!"}
          image={"/img/cf20.jpg"}
          />
       </div>
    )
   }