import {
    Editable,
    EditableInput,
    EditablePreview,
    useEditableControls
  } from '@chakra-ui/react'
  import { Flex, ButtonGroup,IconButton,Input} from '@chakra-ui/react';
  import {CloseIcon,EditIcon,CheckIcon  } from '@chakra-ui/icons'

 


 export function Goals() {
    /* Here's a custom control */
    function EditableControls() {
      const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
      } =useEditableControls()
  
      return isEditing ? (
        <ButtonGroup justifyContent='center' size='sm' p="10px">
          <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
          <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
        </ButtonGroup>
      ) : (
        <Flex justifyContent='center' p="10px">
          <IconButton size='md' icon={<EditIcon />} {...getEditButtonProps()} />
        </Flex>
      )
    }
  
    return (
      <Editable
        textAlign='center'
        fontSize='md'
        isPreviewFocusable={false}
        placeholder='Escribe aqui los objetivos del día'
        p="15px"
      >
        <EditablePreview />
        {/* Here is the custom input */}
        <Input as={EditableInput} />
        <EditableControls />
      </Editable>
    )
  }