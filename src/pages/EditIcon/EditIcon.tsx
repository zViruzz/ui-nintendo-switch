import { type ChangeEvent } from 'react'

function EditIcon () {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files
    if (file === null) return
    console.log('🚀 ~ handleChange ~ file:', file[0])
    console.log('si')
  }

  return (
    <div>
      <form
        className='h-full w-full'
        encType='multipart/form-data'
      >
        <input
          className='hidden'
          name='file'
          type='file'
          id='file-upload'
          accept='image/*'
          onChange={handleChange}

        />
        <label
          htmlFor='file-upload'
        >
        </label>
      </form>
    </div>
  )
}

export default EditIcon
