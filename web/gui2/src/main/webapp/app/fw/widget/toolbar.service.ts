/*
 * Copyright 2015-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Injectable } from '@angular/core';

import { ButtonService } from './button.service';
import { FnService } from '../util/fn.service';
import { IconService } from '../svg/icon.service';
import { LogService } from '../../log.service';
import { PanelService } from '../layer/panel.service';

/**
 * ONOS GUI -- Widget -- Toolbar Service
 * TODO: Augment service to allow toolbars to exist on right edge of screen
 * TODO: also - make toolbar more object aware (rows etc.)
 */
@Injectable()
export class ToolbarService {

  constructor(
    private fs: FnService,
    private bns: ButtonService,
    private is: IconService,
    private log: LogService,
    private ps: PanelService,
  ) {
    this.log.debug('ToolbarService constructed');
  }

}
