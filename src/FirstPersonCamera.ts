var THREE = require("three");
import {Util} from "./Util";

export class FirstPersonCamera
{
    pitch: any;
    yaw: any;
    camera: any;
    position: {x: 0, y: 0, z: 0};

    constructor(camera: any)
    {
        this.pitch = new THREE.Object3D();
        this.yaw = new THREE.Object3D();
        this.camera = camera;

        this.yaw.add(this.pitch);
        this.pitch.add(this.camera);
    }

    pitchCamera(amount: number)
    {
        this.pitch.rotation.x = Util.rad(amount);
    }

    yawCamera(amount: number)
    {
        this.yaw.rotation.y = Util.rad(amount);
    }

    update()
    {
        this.yaw.position.x = this.position.x;
        this.yaw.position.y = this.position.y;
        this.yaw.position.z = this.position.z;
    }
}