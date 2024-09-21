import { useTranslation } from 'react-i18next'
import ListPageTransition from '../../../components/transitions/ListPageTransition'
import SelectionSetting from '../../../components/layouts/SelectionSetting'
import { useAppSelector } from '../../../redux/hooks'
import CharacterProfile from '../../../components/CharacterProfile'
import Subheading from '../../../components/layouts/Subheading'
import { useState } from 'react'
import EditName from '../../../components/EditName'
import { Link } from 'react-router-dom'

export function UserSettings () {
  const [isHiddenEditName, setIsHiddenEditName] = useState(true)
  const { t } = useTranslation()
  const { username, email } = useAppSelector((state) => state.user)

  return (
    <ListPageTransition>
      <EditName isHidden={isHiddenEditName} setIsHidden={setIsHiddenEditName} />

      <div>
        <div className='mb-28'>
          <Subheading>
            <h3>{t('users.user-setting.profile-settings')}</h3>
          </Subheading>

          <SelectionSetting
            className='border-y border-gray flex justify-between'
            onClick={() => {
              setIsHiddenEditName(false)
            }}
          >
            <div>{t('users.user-setting.nickname')}</div>
            <div
              className='text-secodary bg-transparent p-0'
              >
              {username}
            </div>
          </SelectionSetting>
          <SelectionSetting
            as={Link}
            to='/edit-icon'
            className='border-b border-gray flex justify-between'
          >
            <div>{t('users.user-setting.edit-icon')}</div>
            <div>
              <CharacterProfile className='h-16 w-16' />
            </div>
          </SelectionSetting>
          <SelectionSetting
            as={Link}
            to='/play-activity-settings'
            className='border-b border-gray'
          >
            {t('users.user-setting.play-activity-setting')}
          </SelectionSetting>
        </div>

        <div className='mb-28'>
          <Subheading>
            <h3>{t('users.user-setting.nintendo-account')}</h3>
            <p className='text-description'>
              ({email})
            </p>
          </Subheading>

          <SelectionSetting className='border-y border-gray flex justify-between' >
            {t('users.user-setting.nintendo-account.option1')}
          </SelectionSetting>
          <SelectionSetting className='border-b border-gray flex justify-between' >
            {t('users.user-setting.nintendo-account.option2')}
          </SelectionSetting>
        </div>

        <div className='mb-28'>
          <Subheading>
            <h3>{t('users.user-setting.nintendo-switch-ol')}</h3>
          </Subheading>

          <SelectionSetting className='border-y border-gray flex justify-between' >
            {t('users.user-setting.nintendo-switch-ol.option1')}
          </SelectionSetting>
        </div>

        <div className='mb-28'>
          <Subheading>
            <h3>{t('users.user-setting.nintendo-eshop')}</h3>
          </Subheading>

          <SelectionSetting className='border-y border-gray flex justify-between' >
            {t('users.user-setting.nintendo-eshop.option1')}
          </SelectionSetting>
          <SelectionSetting disabled={true} className=' border-gray flex justify-between' >
            <div className='text-2xl text-description mb-11'>
              {t('users.user-setting.nintendo-eshop.description')}
            </div>
          </SelectionSetting>
          <SelectionSetting className='border-y border-gray flex justify-between' >
            {t('users.user-setting.nintendo-eshop.option2')}
          </SelectionSetting>
        </div>

        <div className='mb-28'>
          <Subheading>
            <h3>{t('users.user-setting.friend-functions')}</h3>
          </Subheading>

          <SelectionSetting className='border-y border-gray flex justify-between' >
            {t('users.user-setting.friend-functions.option1')}
          </SelectionSetting>
          <SelectionSetting className='border-b border-gray flex justify-between' >
            {t('users.user-setting.friend-functions.option2')}
          </SelectionSetting>
        </div>

        <div className='mb-28'>
          <Subheading>
            <h3>{t('users.user-setting.album')}</h3>
          </Subheading>

          <SelectionSetting className='border-y border-gray flex justify-between' >
            {t('users.user-setting.album.option1')}
          </SelectionSetting>
        </div>

        <div>
          <Subheading>
            <h3>{t('users.user-setting.user-support')}</h3>
          </Subheading>

          <SelectionSetting className='border-y border-gray flex justify-between' >
            {t('users.user-setting.user-support.option1')}
          </SelectionSetting>
        </div>

      </div>
    </ListPageTransition>

  )
}
