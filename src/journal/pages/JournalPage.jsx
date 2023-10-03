import { AddOutlined, MailLockOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView} from '../view'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal'

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal )

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }

  console.log(active)
  
  return (
    <JournalLayout>
          
       {        
        (!!active)
         ? <NoteView/> 
         : <NothingSelectedView/>
       }

       <IconButton 
        onClick={ onClickNewNote }
        size='large'
        disabled= { isSaving }
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
       >
        <AddOutlined sx={{fontSize: 30 }}/>        
       </IconButton>

    </JournalLayout>

  )
}
