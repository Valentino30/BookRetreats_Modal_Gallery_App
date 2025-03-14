import { RetreatPage } from '@/modules/retreats/pages'
import { getRetreat } from '@/modules/retreats/actions'

export default async ({ params }) => {
  const { slug } = await params

  const { data } = await getRetreat({ slug })

  return (
    <RetreatPage retreat={data} />
  )
}
