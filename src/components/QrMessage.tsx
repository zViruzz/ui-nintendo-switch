import CardMessage from './layouts/CardMessage'

export default function QrMessage () {
  return (
    <CardMessage
      column={false}
      buttons={[
        {
          labal: 'Ok',
          onClick: () => {
            console.log('click ok')
          }
        },
        {
          labal: 'Send',
          onClick: () => {
            console.log('click Send')
          }
        }
      ]}
    >
      <div className='flex justify-center items-center pb-20'>
        <div className='bg-black w-[30rem] h-[30rem]'>

        </div>
      </div>
    </CardMessage>
  )
}
