import { ExecutionContext, Injectable } from '@nestjs/common'
import { CacheInterceptor } from '@nestjs/cache-manager'

@Injectable()
class HttpCacheInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext): string | undefined {
    const request = context.switchToHttp().getRequest()
    const httpServer = request.applicationRef

    const isGetRequest = httpServer.getRequestMethod(request) === 'GET'
    const excludePaths = []
    if (
      !isGetRequest ||
      (isGetRequest && excludePaths.includes(httpServer.getRequestUrl))
    ) {
      return undefined
    }
    return httpServer.getRequestUrl(request)
  }
}