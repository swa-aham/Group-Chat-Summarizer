import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChatFileTitle } from "../chatFile/ChatFileTitle";

export const SummaryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
