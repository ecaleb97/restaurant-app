import { 
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

interface CardWrapperProps {
  title: string;
  children: React.ReactNode;
}

export function CardWrapper({ title, children }: CardWrapperProps) {
  return (
    <Card className="w-[320px] lg:w-[400px] mt-24 p-6 mx-auto">
      <CardHeader className="p-0 pb-4">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {children}
      </CardContent>
    </Card>
  )
}