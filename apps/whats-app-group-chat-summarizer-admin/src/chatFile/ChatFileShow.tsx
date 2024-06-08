import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CHATFILE_TITLE_FIELD } from "./ChatFileTitle";

export const ChatFileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fileContent" source="fileContent" />
        <TextField label="fileName" source="fileName" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ChatMessage"
          target="chatFileId"
          label="ChatMessages"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="ChatFile"
              source="chatfile.id"
              reference="ChatFile"
            >
              <TextField source={CHATFILE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="messageText" source="messageText" />
            <TextField label="sender" source="sender" />
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Summary"
          target="chatFileId"
          label="Summaries"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="ChatFile"
              source="chatfile.id"
              reference="ChatFile"
            >
              <TextField source={CHATFILE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="summaryText" source="summaryText" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
