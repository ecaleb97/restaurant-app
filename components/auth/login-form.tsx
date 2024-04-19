import { signIn } from "@/auth";
import { CardWrapper } from "@/components/card/card-wrapper";
import { Button } from "@/components/ui/button";

export async function LoginForm() {
  return (
    <CardWrapper title="Sign in">
      <form action={async () => {
        "use server"
        await signIn("github", {
          redirectTo: "/",
        })
      }}>
        <Button type="submit">Sign in</Button>
      </form>
    </CardWrapper>
  )
}