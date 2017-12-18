import { NgModule } from '@angular/core';
import { UsersOnlineComponent } from './users-online/users-online';
import { MainHomeComponent } from './main-home/main-home';
import { ChatRoomsComponent } from './chat-rooms/chat-rooms';
@NgModule({
	declarations: [UsersOnlineComponent,
    MainHomeComponent,
    ChatRoomsComponent,
    ChatRoomsComponent],
	imports: [],
	exports: [UsersOnlineComponent,
    MainHomeComponent,
    ChatRoomsComponent,
    ChatRoomsComponent]
})
export class ComponentsModule {}
