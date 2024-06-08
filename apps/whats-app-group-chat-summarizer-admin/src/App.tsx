import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SummaryList } from "./summary/SummaryList";
import { SummaryCreate } from "./summary/SummaryCreate";
import { SummaryEdit } from "./summary/SummaryEdit";
import { SummaryShow } from "./summary/SummaryShow";
import { ChatMessageList } from "./chatMessage/ChatMessageList";
import { ChatMessageCreate } from "./chatMessage/ChatMessageCreate";
import { ChatMessageEdit } from "./chatMessage/ChatMessageEdit";
import { ChatMessageShow } from "./chatMessage/ChatMessageShow";
import { ChatFileList } from "./chatFile/ChatFileList";
import { ChatFileCreate } from "./chatFile/ChatFileCreate";
import { ChatFileEdit } from "./chatFile/ChatFileEdit";
import { ChatFileShow } from "./chatFile/ChatFileShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"WhatsAppGroupChatSummarizer"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Summary"
          list={SummaryList}
          edit={SummaryEdit}
          create={SummaryCreate}
          show={SummaryShow}
        />
        <Resource
          name="ChatMessage"
          list={ChatMessageList}
          edit={ChatMessageEdit}
          create={ChatMessageCreate}
          show={ChatMessageShow}
        />
        <Resource
          name="ChatFile"
          list={ChatFileList}
          edit={ChatFileEdit}
          create={ChatFileCreate}
          show={ChatFileShow}
        />
      </Admin>
    </div>
  );
};

export default App;
