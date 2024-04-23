import { logOut } from "@/actions/signOut";
import { Button } from "@/components/ui/button";

export function SignOut() {
  return (
    <form action={logOut} className="px-5">
      <Button type="submit">Sign out</Button>
    </form>
  )
}