import { useNavigate, useRouter } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'

export function NotFoundError() {
  const navigate = useNavigate()
  const { history } = useRouter()
  return (
    <div className="h-[70svh]">
      <div className="m-auto flex size-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] leading-tight font-bold">404</h1>
        <span className="font-medium">抱歉！页面未找到</span>
        <p className="text-muted-foreground text-center">
          您访问的页面似乎不存在
          {' '}
          <br />
          或已被移除。
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" onClick={() => history.go(-1)}>
            返回上页
          </Button>
          <Button onClick={() => navigate({ to: '/' })}>返回首页</Button>
        </div>
      </div>
    </div>
  )
}
