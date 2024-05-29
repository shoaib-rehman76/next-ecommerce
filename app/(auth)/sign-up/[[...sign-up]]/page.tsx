import { SignUp } from "@clerk/nextjs";
import classNames from "classnames";

export default function Page() {
  return (
    <div className={classNames("flex justify-center h-screen items-center")}>
      <SignUp path="/sign-up" />
    </div>
  );
}
