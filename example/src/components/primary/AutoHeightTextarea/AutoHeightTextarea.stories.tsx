import AutoHeightTextarea from '@acrool/react-auto-height-textarea';
import type {Meta, StoryObj} from '@storybook/react';




const meta = {
    title: 'Primary/AutoHeightTextarea',
    component: AutoHeightTextarea,
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        docs: {
            description: {
                component: 'Custom skeleton by component'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {

    },
} satisfies Meta<typeof AutoHeightTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;




export const Primary: Story = {
    args: {},
};

