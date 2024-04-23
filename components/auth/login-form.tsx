import { login } from "@/actions/login";
import { CardWrapper } from "@/components/card/card-wrapper";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  return (
    <CardWrapper title="Sign in">
      <form action={login}>
        <Button type="submit">Sign in with Github</Button>
      </form>
    </CardWrapper>
  )
}