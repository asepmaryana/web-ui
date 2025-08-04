export interface DeviceBrand {
    id: number;
    name: string;
    createdAt: string;
    createdBy: string | null;
    updatedAt: string | null;
    updatedBy: string | null;
    deletedAt: string | null;
    deletedBy: string | null;
}

export interface DeviceLocation {
    id: number;
    name: string;
    createdAt: string;
    createdBy: string | null;
    updatedAt: string | null;
    updatedBy: string | null;
    deletedAt: string | null;
    deletedBy: string | null;
}


export interface Pump {
    id: string;
    code: string;
    name: string;
    ipAddress: string;
    port: number;
    slot: number;
    timeOut: number;
    latitude: number;
    longitude: number;
    isEnabled: boolean;
    isOnline: boolean;
    isMaintenance: boolean;
    isRunning: boolean;
    isElectric: boolean;
    isPmNeed: boolean;
    countPmHour: number;
    createdAt: string;
    createdBy: string | null;
    updatedAt: string;
    updatedBy: string;
    deletedAt: string | null;
    deletedBy: string | null;
    countRunHour: number;
    _deviceBrand_: DeviceBrand;
    _deviceLocation_: DeviceLocation;
    url: string;
    icon: string;
    communicationStatus: 'Online' | 'Offline';
    operationalStatus: 'Idle' | 'Running' | 'Error';
}

export const pumps: Pump[] = [
    {
        "id": "0b76be74-f97c-4c6a-822c-517e129b71d6", "code": "PP196", "name": "SKY-PSB-PP196", "ipAddress": "172.16.17.30", "port": 502, "slot": 1, "timeOut": 5000, "latitude": -3.747629, "longitude": 103.84481, "isEnabled": true, "isOnline": false, "isMaintenance": false, "isRunning": false, "isElectric": true, "isPmNeed": true, "countPmHour": 5000, "createdAt": "2025-06-11T10:35:06.201Z", "createdBy": null, "updatedAt": "2025-06-25T21:30:20.571Z", "updatedBy": "Scheduler", "deletedAt": null, "deletedBy": null, "countRunHour": 0,
        "_deviceBrand_": { "id": 1, "name": "Sykes", "createdAt": "2025-06-11T10:34:00.154Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "_deviceLocation_": { "id": 3, "name": "PIT 1 Banko", "createdAt": "2025-06-11T10:34:00.173Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "url": "/dewatering/monitoring/0b76be74-f97c-4c6a-822c-517e129b71d6", "icon": "pump-grey-icon.png", "communicationStatus": "Offline", "operationalStatus": "Idle"
    },
    {
        "id": "a5aceff3-b57c-4f61-be40-758cbc3ad981", "code": "PP199", "name": "SKY-TAL-PP199", "ipAddress": "172.16.15.80", "port": 502, "slot": 1, "timeOut": 5000, "latitude": -3.729312, "longitude": 103.77821, "isEnabled": true, "isOnline": true, "isMaintenance": false, "isRunning": false, "isElectric": true, "isPmNeed": true, "countPmHour": 5000, "createdAt": "2025-06-11T10:35:06.201Z", "createdBy": null, "updatedAt": "2025-06-25T21:30:00.057Z", "updatedBy": "Scheduler", "deletedAt": null, "deletedBy": null, "countRunHour": 0,
        "_deviceBrand_": { "id": 1, "name": "Sykes", "createdAt": "2025-06-11T10:34:00.154Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "_deviceLocation_": { "id": 1, "name": "TAL Utara", "createdAt": "2025-06-11T10:34:00.173Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "url": "/dewatering/monitoring/a5aceff3-b57c-4f61-be40-758cbc3ad981", "icon": "pump-green-icon.png", "communicationStatus": "Online", "operationalStatus": "Idle"
    },
    {
        "id": "82647b15-70a8-4057-8dae-6efd13b9053d", "code": "PP200", "name": "SKY-PSB-PP200", "ipAddress": "172.16.17.50", "port": 502, "slot": 1, "timeOut": 5000, "latitude": -3.747729, "longitude": 103.84486, "isEnabled": true, "isOnline": false, "isMaintenance": false, "isRunning": false, "isElectric": true, "isPmNeed": true, "countPmHour": 5000, "createdAt": "2025-06-11T10:35:06.201Z", "createdBy": null, "updatedAt": "2025-06-25T21:30:05.085Z", "updatedBy": "Scheduler", "deletedAt": null, "deletedBy": null, "countRunHour": 0,
        "_deviceBrand_": { "id": 1, "name": "Sykes", "createdAt": "2025-06-11T10:34:00.154Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "_deviceLocation_": { "id": 3, "name": "PIT 1 Banko", "createdAt": "2025-06-11T10:34:00.173Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "url": "/dewatering/monitoring/82647b15-70a8-4057-8dae-6efd13b9053d", "icon": "pump-grey-icon.png", "communicationStatus": "Offline", "operationalStatus": "Idle"
    },
    {
        "id": "deccad37-9c26-411b-94d5-21c8c57d4feb", "code": "PP197", "name": "SKY-PSB-PP197", "ipAddress": "172.16.17.40", "port": 502, "slot": 1, "timeOut": 5000, "latitude": -3.747529, "longitude": 103.844795, "isEnabled": true, "isOnline": false, "isMaintenance": false, "isRunning": false, "isElectric": true, "isPmNeed": true, "countPmHour": 5000, "createdAt": "2025-06-11T10:35:06.201Z", "createdBy": null, "updatedAt": "2025-06-25T21:30:00.026Z", "updatedBy": "Scheduler", "deletedAt": null, "deletedBy": null, "countRunHour": 0,
        "_deviceBrand_": { "id": 1, "name": "Sykes", "createdAt": "2025-06-11T10:34:00.154Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "_deviceLocation_": { "id": 3, "name": "PIT 1 Banko", "createdAt": "2025-06-11T10:34:00.173Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "url": "/dewatering/monitoring/deccad37-9c26-411b-94d5-21c8c57d4feb", "icon": "pump-grey-icon.png", "communicationStatus": "Offline", "operationalStatus": "Idle"
    },
    {
        "id": "d1c93adb-125b-4f4d-891f-6ef9505857c1", "code": "PP213", "name": "SUL-PTT-PP213", "ipAddress": "172.16.16.20", "port": 502, "slot": 1, "timeOut": 5000, "latitude": -3.747629, "longitude": 103.84481, "isEnabled": true, "isOnline": false, "isMaintenance": false, "isRunning": false, "isElectric": true, "isPmNeed": true, "countPmHour": 5000, "createdAt": "2025-06-11T10:35:06.201Z", "createdBy": null, "updatedAt": "2025-06-25T21:30:00.043Z", "updatedBy": "Scheduler", "deletedAt": null, "deletedBy": null, "countRunHour": 0,
        "_deviceBrand_": { "id": 3, "name": "Sulzer", "createdAt": "2025-06-11T10:34:00.154Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "_deviceLocation_": { "id": 4, "name": "PIT 3 Banko", "createdAt": "2025-06-11T10:35:06.145Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "url": "/dewatering/monitoring/d1c93adb-125b-4f4d-891f-6ef9505857c1", "icon": "pump-grey-icon.png", "communicationStatus": "Offline", "operationalStatus": "Idle"
    },
    {
        "id": "333626b1-2d2c-4748-bc9e-f222b8b27dc5", "code": "PP217", "name": "SUL-TAL-PP217", "ipAddress": "172.16.15.60", "port": 502, "slot": 1, "timeOut": 5000, "latitude": -3.728712, "longitude": 103.77921, "isEnabled": true, "isOnline": false, "isMaintenance": false, "isRunning": false, "isElectric": true, "isPmNeed": true, "countPmHour": 5000, "createdAt": "2025-06-11T10:35:06.201Z", "createdBy": null, "updatedAt": "2025-06-25T21:30:00.010Z", "updatedBy": "Scheduler", "deletedAt": null, "deletedBy": null, "countRunHour": 0,
        "_deviceBrand_": { "id": 3, "name": "Sulzer", "createdAt": "2025-06-11T10:34:00.154Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "_deviceLocation_": { "id": 1, "name": "TAL Utara", "createdAt": "2025-06-11T10:34:00.173Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "url": "/dewatering/monitoring/333626b1-2d2c-4748-bc9e-f222b8b27dc5", "icon": "pump-grey-icon.png", "communicationStatus": "Offline", "operationalStatus": "Idle"
    },
    {
        "id": "1ddd3ba2-84f0-4365-9b78-fcf9682a8b31", "code": "PP216", "name": "SUL-TAL-PP216", "ipAddress": "172.16.15.50", "port": 502, "slot": 1, "timeOut": 5000, "latitude": -3.728712, "longitude": 103.77921, "isEnabled": true, "isOnline": true, "isMaintenance": false, "isRunning": false, "isElectric": true, "isPmNeed": true, "countPmHour": 5000, "createdAt": "2025-06-11T10:35:06.201Z", "createdBy": null, "updatedAt": "2025-06-25T21:30:30.729Z", "updatedBy": "Scheduler", "deletedAt": null, "deletedBy": null, "countRunHour": 0,
        "_deviceBrand_": { "id": 3, "name": "Sulzer", "createdAt": "2025-06-11T10:34:00.154Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "_deviceLocation_": { "id": 1, "name": "TAL Utara", "createdAt": "2025-06-11T10:34:00.173Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "url": "/dewatering/monitoring/1ddd3ba2-84f0-4365-9b78-fcf9682a8b31", "icon": "pump-green-icon.png", "communicationStatus": "Online", "operationalStatus": "Idle"
    },
    {
        "id": "eac795ee-484e-4657-9b39-367fbf79204f", "code": "PP215", "name": "SUL-TAL-PP215", "ipAddress": "172.16.15.40", "port": 502, "slot": 1, "timeOut": 5000, "latitude": -3.728712, "longitude": 103.77921, "isEnabled": true, "isOnline": false, "isMaintenance": false, "isRunning": false, "isElectric": true, "isPmNeed": true, "countPmHour": 5000, "createdAt": "2025-06-11T10:35:06.201Z", "createdBy": null, "updatedAt": "2025-06-25T21:30:30.706Z", "updatedBy": "Scheduler", "deletedAt": null, "deletedBy": null, "countRunHour": 0,
        "_deviceBrand_": { "id": 3, "name": "Sulzer", "createdAt": "2025-06-11T10:34:00.154Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "_deviceLocation_": { "id": 1, "name": "TAL Utara", "createdAt": "2025-06-11T10:34:00.173Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "url": "/dewatering/monitoring/eac795ee-484e-4657-9b39-367fbf79204f", "icon": "pump-grey-icon.png", "communicationStatus": "Offline", "operationalStatus": "Idle"
    },
    {
        "id": "aba2169d-b3c5-451d-ae96-2bfdf1961b56", "code": "PP214", "name": "SUL-PTT-PP214", "ipAddress": "172.16.15.30", "port": 502, "slot": 1, "timeOut": 5000, "latitude": -3.747629, "longitude": 103.84482, "isEnabled": true, "isOnline": false, "isMaintenance": false, "isRunning": false, "isElectric": true, "isPmNeed": true, "countPmHour": 5000, "createdAt": "2025-06-11T10:35:06.201Z", "createdBy": null, "updatedAt": "2025-06-25T21:30:20.636Z", "updatedBy": "Scheduler", "deletedAt": null, "deletedBy": null, "countRunHour": 0,
        "_deviceBrand_": { "id": 3, "name": "Sulzer", "createdAt": "2025-06-11T10:34:00.154Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "_deviceLocation_": { "id": 4, "name": "PIT 3 Banko", "createdAt": "2025-06-11T10:35:06.145Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "url": "/dewatering/monitoring/aba2169d-b3c5-451d-ae96-2bfdf1961b56", "icon": "pump-grey-icon.png", "communicationStatus": "Offline", "operationalStatus": "Idle"
    },
    {
        "id": "70b33c94-b704-4760-88a8-a0e18faee6f5", "code": "PP218", "name": "SUL-TAL-PP218", "ipAddress": "172.16.15.70", "port": 502, "slot": 1, "timeOut": 5000, "latitude": -3.728712, "longitude": 103.77921, "isEnabled": true, "isOnline": false, "isMaintenance": false, "isRunning": false, "isElectric": true, "isPmNeed": true, "countPmHour": 5000, "createdAt": "2025-06-11T10:35:06.201Z", "createdBy": null, "updatedAt": "2025-06-25T21:30:30.668Z", "updatedBy": "Scheduler", "deletedAt": null, "deletedBy": null, "countRunHour": 0,
        "_deviceBrand_": { "id": 3, "name": "Sulzer", "createdAt": "2025-06-11T10:34:00.154Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "_deviceLocation_": { "id": 1, "name": "TAL Utara", "createdAt": "2025-06-11T10:34:00.173Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "url": "/dewatering/monitoring/70b33c94-b704-4760-88a8-a0e18faee6f5", "icon": "pump-grey-icon.png", "communicationStatus": "Offline", "operationalStatus": "Idle"
    },
    {
        "id": "f0d6edfc-9e76-4e1c-88fd-26dace4fbb62", "code": "PP212", "name": "SUL-PTT-PP212", "ipAddress": "172.16.16.10", "port": 502, "slot": 1, "timeOut": 5000, "latitude": -3.747629, "longitude": 103.84481, "isEnabled": true, "isOnline": false, "isMaintenance": false, "isRunning": false, "isElectric": true, "isPmNeed": true, "countPmHour": 5000, "createdAt": "2025-06-11T10:35:06.201Z", "createdBy": null, "updatedAt": "2025-06-25T21:30:15.141Z", "updatedBy": "Scheduler", "deletedAt": null, "deletedBy": null, "countRunHour": 0,
        "_deviceBrand_": { "id": 3, "name": "Sulzer", "createdAt": "2025-06-11T10:34:00.154Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "_deviceLocation_": { "id": 4, "name": "PIT 3 Banko", "createdAt": "2025-06-11T10:35:06.145Z", "createdBy": null, "updatedAt": null, "updatedBy": null, "deletedAt": null, "deletedBy": null },
        "url": "/dewatering/monitoring/f0d6edfc-9e76-4e1c-88fd-26dace4fbb62", "icon": "pump-grey-icon.png", "communicationStatus": "Offline", "operationalStatus": "Idle"
    }
];
export interface Severity {
    id: number;
    name: string;
    color: string;
    createdAt: string;
    createdBy: null;
    updatedAt: null;
    updatedBy: null;
    deletedAt: null;
    deletedBy: null;
}

export interface AlarmDetails {
    id: number;
    name: string;
    createdAt: string;
    createdBy: null;
    updatedAt: null;
    updatedBy: null;
    deletedAt: null;
    deletedBy: null;
    __severity__: Severity;
}

export interface DeviceInAlarm {
    id: string;
    code: string;
    name: string;
    ipAddress: string;
    port: number;
    slot: number;
    timeOut: number;
    latitude: number;
    longitude: number;
    isEnabled: boolean;
    isOnline: boolean;
    isMaintenance: boolean;
    isRunning: boolean;
    isElectric: boolean;
    isPmNeed: boolean;
    countPmHour: number;
    createdAt: string;
    createdBy: string | null;
    updatedAt: string | null;
    updatedBy: string | null;
    deletedAt: string | null;
    deletedBy: string | null;
    countRunHour: number;
    __deviceLocation__: {
        id: number;
        name: string;
        createdAt: string;
        createdBy: string | null;
        updatedAt: string | null;
        updatedBy: string | null;
        deletedAt: string | null;
        deletedBy: string | null;
    };
}

export interface Alarm {
    id: string;
    note: string | null;
    createdAt: string | null;
    acknowledgeAt: string | null;
    acknowledgeBy: string | null;
    __alarm__: AlarmDetails;
    __device__: DeviceInAlarm;
}

export interface AlarmApiResponse {
    status: boolean;
    message: string;
    data: [Alarm[], number];
}


export const alarmData: AlarmApiResponse = {
  status: true,
  message: "Data read successfully.",
  data: [
    [
      {
        id: "1b5f0c07-8d25-45d2-a1cb-4b9e7acec3ca",
        note: null,
        createdAt: null,
        acknowledgeAt: null,
        acknowledgeBy: null,
        __alarm__: {
          id: 1,
          name: "Communication Lost",
          createdAt: "2025-06-11T10:34:00.049Z",
          createdBy: null,
          updatedAt: null,
          updatedBy: null,
          deletedAt: null,
          deletedBy: null,
          __severity__: {
            id: 4,
            name: "Warning",
            color: "#FFFF00",
            createdAt: "2025-06-11T10:34:00.027Z",
            createdBy: null,
            updatedAt: null,
            updatedBy: null,
            deletedAt: null,
            deletedBy: null
          }
        },
        __device__: {
          id: "1b5f0e07-8d25-45d2-a1cb-4b9e7acec3ca",
          code: "PP201",
          name: "WIL-MHY-PP201",
          ipAddress: "10.4.5.223",
          port: 502,
          slot: 1,
          timeOut: 5000,
          latitude: -3.744869,
          longitude: 103.842415,
          isEnabled: false,
          isOnline: false,
          isMaintenance: false,
          isRunning: false,
          isElectric: false,
          isPmNeed: true,
          countPmHour: 5000,
          createdAt: "2025-06-11T10:35:06.201Z",
          createdBy: null,
          updatedAt: null,
          updatedBy: null,
          deletedAt: null,
          deletedBy: null,
          countRunHour: 0,
          __deviceLocation__: {
            id: 1,
            name: "TAL Utara",
            createdAt: "2025-06-11T10:34:00.173Z",
            createdBy: null,
            updatedAt: null,
            updatedBy: null,
            deletedAt: null,
            deletedBy: null
          }
        }
      },
      // 9 Data tambahan
      ...Array.from({ length: 9 }, (_, i) => ({
        id: `alarm-${i + 2}`,
        note: null,
        createdAt: null,
        acknowledgeAt: null,
        acknowledgeBy: null,
        __alarm__: {
          id: i + 2,
          name: ["Overheat", "Voltage Drop", "Pump Jammed", "Sensor Failure", "Leak Detected", "High Vibration", "Low Flow", "Unauthorized Access", "Power Surge"][i],
          createdAt: "2025-06-11T10:34:00.049Z",
          createdBy: null,
          updatedAt: null,
          updatedBy: null,
          deletedAt: null,
          deletedBy: null,
          __severity__: {
            id: (i % 4) + 1,
            name: ["Critical", "Major", "Minor", "Warning"][(i % 4)],
            color: ["#FF0000", "#FFA500", "#00BFFF", "#FFFF00"][(i % 4)],
            createdAt: "2025-06-11T10:34:00.027Z",
            createdBy: null,
            updatedAt: null,
            updatedBy: null,
            deletedAt: null,
            deletedBy: null
          }
        },
        __device__: {
          id: `device-${i + 2}`,
          code: `PP20${i + 2}`,
          name: `SKY-TES-PP20${i + 2}`,
          ipAddress: `10.4.5.${100 + i}`,
          port: 502,
          slot: 1,
          timeOut: 5000,
          latitude: -3.74 + i * 0.001,
          longitude: 103.84 + i * 0.001,
          isEnabled: true,
          isOnline: i % 2 === 0,
          isMaintenance: false,
          isRunning: false,
          isElectric: true,
          isPmNeed: true,
          countPmHour: 5000,
          createdAt: "2025-06-11T10:35:06.201Z",
          createdBy: null,
          updatedAt: null,
          updatedBy: null,
          deletedAt: null,
          deletedBy: null,
          countRunHour: 0,
          __deviceLocation__: {
            id: (i % 4) + 1,
            name: ["TAL Utara", "PIT 1 Banko", "PIT 3 Banko", "WIL Barat"][(i % 4)],
            createdAt: "2025-06-11T10:34:00.173Z",
            createdBy: null,
            updatedAt: null,
            updatedBy: null,
            deletedAt: null,
            deletedBy: null
          }
        }
      }))
    ],
    10
  ]
  
};
