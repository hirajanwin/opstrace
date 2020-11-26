/**
 * Copyright 2020 Opstrace, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export type CommandCategory = "Help" | "Module" | "View" | "Hidden";

export type CommandEvent = {
  keyboardEvent?: KeyboardEvent;
  keys?: string;
  preventNext: () => void;
};

export type Command = {
  id: string;
  description: string;
  handler: (event: CommandEvent, args?: any[]) => any;
  keybindings?: string[];
  category?: CommandCategory;
};

export type CommandServiceApi = {
  register: (command: Command) => void;
  unregister: (command: Command) => void;
  executeCommand: (id: string, args?: any[]) => any;
};

export type KeyBindingState = { [key: string]: Command[] };

export type CommandServiceState = {
  commands: Command[];
  keyBindings: KeyBindingState;
};
