import React from 'react'
import { Story } from '../../_lib/compat'
import Modal, { ModalDismissButton, Props } from '.'
import { OverlayProvider } from '@react-aria/overlays'
import { useOverlayTriggerState } from 'react-stately'
import Button from '../Button'
import {
  ModalAlign,
  ModalBody,
  ModalButtons,
  ModalHeader,
} from './ModalPlumbing'
import styled from 'styled-components'
import { theme } from '../../styled'
import TextField from '../TextField'

export default {
  title: 'Modal',
  component: Modal,
  args: {
    title: 'Title',
  },
  argTypes: {
    size: {
      options: ['S', 'M', 'L'],
      control: {
        type: 'inline-radio',
      },
    },
    bottomSheet: {
      options: ['full', 'true', 'false'],
      mapping: { full: 'full', true: true, false: false },
      control: {
        type: 'inline-radio',
      },
    },
  },
}

const DefaultStory = (args: Props) => {
  const state = useOverlayTriggerState({})
  return (
    // Application must be wrapped in an OverlayProvider so that it can be
    // hidden from screen readers when a modal opens.
    <OverlayProvider>
      <Button onClick={() => state.open()}>Open Modal</Button>

      <Modal
        isOpen={state.isOpen}
        onClose={() => state.close()}
        isDismissable
        {...args}
      >
        <ModalHeader />
        <ModalBody>
          <ModalVStack>
            <StyledModalText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              placeat tenetur, necessitatibus laudantium cumque exercitationem
              provident. Quaerat iure enim, eveniet dolores earum odio quo
              possimus fugiat aspernatur, numquam, commodi repellat.
            </StyledModalText>
            <ModalAlign>
              <TextField
                showLabel
                label="Name"
                placeholder="Nagisa"
              ></TextField>
            </ModalAlign>
            <ModalAlign>
              <TextField
                showLabel
                label="Country"
                placeholder="Tokyo"
              ></TextField>
            </ModalAlign>
          </ModalVStack>
          <ModalButtons>
            <Button variant="Primary" onClick={() => state.close()} fixed>
              Apply
            </Button>
            <Button onClick={() => state.close()} fixed>
              Cancel
            </Button>
          </ModalButtons>
        </ModalBody>
      </Modal>
    </OverlayProvider>
  )
}

const ModalVStack = styled.div`
  display: grid;
  gap: 24px;
`

const StyledModalText = styled(ModalAlign)`
  ${theme((o) => [o.font.text2, o.typography(14)])}
`

export const Default: Story<Props> = DefaultStory.bind({})

const FullBottomSheetStory = (args: Props) => {
  const state = useOverlayTriggerState({})
  return (
    // Application must be wrapped in an OverlayProvider so that it can be
    // hidden from screen readers when a modal opens.
    <OverlayProvider>
      <Button onClick={() => state.open()}>Open Modal</Button>

      <Modal
        isOpen={state.isOpen}
        onClose={() => state.close()}
        isDismissable
        bottomSheet="full"
        {...args}
      >
        <ModalHeader />
        <ModalBody>
          <ModalVStack>
            <StyledModalText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              placeat tenetur, necessitatibus laudantium cumque exercitationem
              provident. Quaerat iure enim, eveniet dolores earum odio quo
              possimus fugiat aspernatur, numquam, commodi repellat.
            </StyledModalText>
            <ModalAlign>
              <TextField
                showLabel
                label="Name"
                placeholder="Nagisa"
              ></TextField>
            </ModalAlign>
            <ModalAlign>
              <TextField
                showLabel
                label="Country"
                placeholder="Tokyo"
              ></TextField>
            </ModalAlign>
          </ModalVStack>
          <ModalButtons>
            <Button variant="Primary" onClick={() => state.close()} fixed>
              Apply
            </Button>
            <Button onClick={() => state.close()} fixed>
              Cancel
            </Button>
          </ModalButtons>
        </ModalBody>
      </Modal>
    </OverlayProvider>
  )
}

export const FullBottomSheet: Story<Props> = FullBottomSheetStory.bind({})

const BottomSheetStory = (args: Props) => {
  const state = useOverlayTriggerState({})
  return (
    // Application must be wrapped in an OverlayProvider so that it can be
    // hidden from screen readers when a modal opens.
    <OverlayProvider>
      <Button onClick={() => state.open()}>Open Modal</Button>

      <Modal
        isOpen={state.isOpen}
        onClose={() => state.close()}
        bottomSheet
        isDismissable
        {...args}
      >
        <ModalHeader />
        <ModalBody>
          <ModalVStack>
            <StyledModalText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              placeat tenetur, necessitatibus laudantium cumque exercitationem
              provident. Quaerat iure enim, eveniet dolores earum odio quo
              possimus fugiat aspernatur, numquam, commodi repellat.
            </StyledModalText>
          </ModalVStack>
          <ModalButtons>
            <Button variant="Danger" onClick={() => state.close()} fixed>
              削除する
            </Button>
            <ModalDismissButton>キャンセル</ModalDismissButton>
          </ModalButtons>
        </ModalBody>
      </Modal>
    </OverlayProvider>
  )
}

export const BottomSheet: Story<Props> = BottomSheetStory.bind({})
