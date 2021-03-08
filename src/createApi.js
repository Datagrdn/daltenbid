import Urbit from "@urbit/http-api";
import { memoize } from "lodash";

const createApi = memoize(async () => {
  const urb = await Urbit.authenticate({
    ship: "nus",
    url: "localhost:8080",
    code: "bortem-pinwyl-macnyx-topdeg",
    verbose: true,
  });
  return urb;
});

export default createApi;
