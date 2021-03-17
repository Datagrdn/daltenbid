import Urbit from "@urbit/http-api";
import { memoize } from "lodash";

const createApi = memoize(async () => {
  const urb = await Urbit.authenticate({
    ship: "dalten",
    url: "138.197.192.56",
    code: "migfur-riphut-pagdev-mirrus",
    verbose: true,
  });
  return urb;
});

export default createApi;
