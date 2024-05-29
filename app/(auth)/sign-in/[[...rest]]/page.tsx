import { SignIn } from "@clerk/nextjs";
import classNames from "classnames";

export default function Page() {
  return (
    <div className={classNames("flex justify-center h-screen items-center")}>
      <SignIn path="/sign-in" />
    </div>
  );
}
