import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CHATFILE_TITLE_FIELD } from "../chatFile/ChatFileTitle";

export const SummaryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Summaries"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
