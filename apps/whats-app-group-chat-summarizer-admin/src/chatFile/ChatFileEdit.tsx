import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ChatMessageTitle } from "../chatMessage/ChatMessageTitle";
import { SummaryTitle } from "../summary/SummaryTitle";

export const ChatFileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="chatMessages"
          reference="ChatMessage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChatMessageTitle} />
        </ReferenceArrayInput>
        <TextInput label="fileContent" multiline source="fileContent" />
        <TextInput label="fileName" source="fileName" />
        <ReferenceArrayInput
          source="summaries"
          reference="Summary"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SummaryTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
