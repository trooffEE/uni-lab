function middlewarePipeline (context: any, middleware: any, index: number) {
  const nextMiddleware = middleware[index]

  if (!nextMiddleware) {
    return context.next
  }

  return async () => {
    const nextPipeline = middlewarePipeline(context, middleware, index + 1)
    await nextMiddleware({ ...context, nextMiddleware: nextPipeline })
  }
}

export default middlewarePipeline
