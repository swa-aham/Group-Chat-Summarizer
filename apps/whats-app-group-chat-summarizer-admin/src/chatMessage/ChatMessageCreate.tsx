import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ChatFileTitle } from "../chatFile/ChatFileTitle";

export const ChatMessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="chatFile.id"
          reference="ChatFile"
          label="ChatFile"
        >
          <SelectInput optionText={ChatFileTitle} />
        </ReferenceInput>
        <TextInput label="messageText" multiline source="messageText" />
        <TextInput label="sender" source="sender" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};