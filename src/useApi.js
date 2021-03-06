import Urbit from "@urbit/http-api";
import { memoize } from "lodash";

const useApi = memoize(async () => {
  const urb = await Urbit.authenticate({
    ship: "zod",
    url: "localhost:8080",
    code: "lidlut-tabwed-pillex-ridrup",
    verbose: true,
  });
  return urb;
});

export default useApi;
