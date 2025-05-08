import { useNavigate, useRouter } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface GeneralErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  minimal?: boolean
}

export function GeneralError({
  className,
  minimal = false,
}: GeneralErrorProps) {
  const navigate = useNavigate()
  const { history } = useRouter()
  return (
    <div className={cn('h-[70svh] w-full', className)}>
      <div className="m-auto flex size-full flex-col items-center justify-center gap-2">
        {!minimal && (
          <h1 className="text-[7rem] leading-tight font-bold">500</h1>
        )}
        <span className="font-medium">抱歉！出现了一些问题 {`:')`}</span>
        <p className="text-muted-foreground text-center">
          给您带来不便，我们深表歉意。<br /> 请稍后再试。
        </p>
        {!minimal && (
          <div className="mt-6 flex gap-4">
            <Button variant="outline" onClick={() => history.go(-1)}>
              返回上页
            </Button>
            <Button onClick={() => navigate({ to: '/' })}>返回首页</Button>
          </div>
        )}
      </div>
    </div>
  )
}
