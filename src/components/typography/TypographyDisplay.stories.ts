import type { Meta, StoryObj } from "@storybook/react";

import TypographyDisplay from "./TypographyDisplay";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/H1",
  component: TypographyDisplay,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof TypographyDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "TypographyDisplay",
  },
};
