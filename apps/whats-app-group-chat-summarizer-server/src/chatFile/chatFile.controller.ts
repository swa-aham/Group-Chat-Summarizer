import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChatFileService } from "./chatFile.service";
import { ChatFileControllerBase } from "./base/chatFile.controller.base";

@swagger.ApiTags("chatFiles")
@common.Controller("chatFiles")
export class ChatFileController extends ChatFileControllerBase {
  constructor(protected readonly service: ChatFileService) {
    super(service);
  }
}
