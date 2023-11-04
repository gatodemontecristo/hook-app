import { useCounter,useFetch } from "../hooks";
import { BreakingQuote,LoadingQuote } from "../03-examples";

export const Layout = () => {
  const {counter,increment} = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
    console.log(data);
    const {author,quote} = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? (
        <LoadingQuote></LoadingQuote>
      ) : (
        <BreakingQuote author={author} quote={quote}></BreakingQuote>
      )}
      
      

      <button className="btn btn-primary" disabled={isLoading} onClick={()=>increment()}>
        Next quote
      </button>
    </>

  );
};
