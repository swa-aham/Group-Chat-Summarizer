import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChatFileTitle } from "../chatFile/ChatFileTitle";

export const SummaryCreate = (props: CreateProps): React.ReactElement => {
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
        <TextInput label="summaryText" multiline source="summaryText" />
      </SimpleForm>
    </Create>
  );
};
