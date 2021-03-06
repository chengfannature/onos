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
import { TestBed, inject } from '@angular/core/testing';

import { LogService } from '../../../../app/log.service';
import { ConsoleLoggerService } from '../../../../app/consolelogger.service';
import { DetailsPanelService } from '../../../../app/fw/layer/detailspanel.service';
import { EditableTextService } from '../../../../app/fw/layer/editabletext.service';
import { FnService } from '../../../../app/fw/util/fn.service';
import { IconService } from '../../../../app/fw/svg/icon.service';
import { MastService } from '../../../../app/fw/mast/mast.service';
import { PanelService } from '../../../../app/fw/layer/panel.service';
import { WebSocketService } from '../../../../app/fw/remote/websocket.service';

class MockEditableTextService {}

class MockIconService {}

class MockFnService {}

class MockMastService {}

class MockPanelService {}

class MockWebSocketService {}

/**
 * ONOS GUI -- Layer -- Details Panel Service - Unit Tests
 */
describe('DetailsPanelService', () => {
    let log: LogService;

    beforeEach(() => {
        log = new ConsoleLoggerService();

        TestBed.configureTestingModule({
            providers: [DetailsPanelService,
                { provide: EditableTextService, useClass: MockEditableTextService },
                { provide: FnService, useClass: MockFnService },
                { provide: IconService, useClass: MockIconService },
                { provide: LogService, useValue: log },
                { provide: MastService, useClass: MockMastService },
                { provide: PanelService, useClass: MockPanelService },
                { provide: WebSocketService, useClass: MockWebSocketService },
            ]
        });
    });

    it('should be created', inject([DetailsPanelService], (service: DetailsPanelService) => {
        expect(service).toBeTruthy();
    }));
});
