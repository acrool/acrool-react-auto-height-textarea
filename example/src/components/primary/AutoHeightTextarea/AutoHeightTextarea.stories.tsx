import type {Meta, StoryObj} from '@storybook/react';
import Example from "./Example";




const meta = {
    title: 'Primary/AutoHeightTextarea',
    component: Example,
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
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;




export const Primary: Story = {
    args: {},
};

