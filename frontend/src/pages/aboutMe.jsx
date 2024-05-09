import React from 'react';
import ReactDOM from 'react-dom/client'
import '../css/styles.css';
import WrapperComponent from '../components/WrapperComponent.jsx';
import ExperienceImages from "../components/ExperienceImages.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <WrapperComponent
        components={[
            <div className="flex mt-20 mb-20 w-[50vw] justify-between">
                <div className="flex flex-col mr-3">
                    <h3 className="font-semibold text-2xl">Education</h3>
                    <p>MATC, 5/20/2024</p>
                    <p>Web Software Developer</p>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-semibold text-2xl">Job</h3>
                    <p>Culver's, Trainer</p>
                    <p>5/16/2016 - Current</p>
                </div>
            </div>,
            <ExperienceImages maxSize="5em" width="450px" />,
            <article className="mt-36 max-w-[60vw]">
                <h2 className="font-semibold text-3xl">Background Experience</h2>
                <p>I went to MATC for 2 years during 2022-2024. I learned about web development and Java.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend nisl dui, sed sagittis eros porta in. Proin non dui vestibulum, aliquet erat eget, luctus justo. Proin tincidunt ligula non maximus molestie. Cras auctor faucibus sapien non pellentesque. Cras porta, leo et laoreet sodales, lacus odio pharetra ex, non commodo leo mauris ut nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut interdum leo. Nullam pellentesque, leo a efficitur venenatis, leo elit cursus nulla, commodo rutrum sapien orci vel nulla.

                    Duis laoreet lacus turpis, eget dapibus eros luctus eget. Cras pharetra hendrerit dui sed lobortis. Praesent sodales et elit in porttitor. Sed malesuada eget neque ut faucibus. Vivamus a aliquam turpis. Mauris luctus sollicitudin metus, quis sagittis tortor dictum eu. Integer ac molestie ex. Nulla facilisi. Nam ultricies orci non auctor dapibus. Praesent non venenatis quam, vel sollicitudin ante. Suspendisse sed mi risus. Morbi ornare, elit ac lobortis luctus, felis dolor lacinia augue, non pharetra ipsum dolor nec magna. Sed luctus tincidunt hendrerit. Aliquam non consequat ante.

                    Fusce pulvinar tortor ut justo dictum finibus. Ut at nulla erat. Vestibulum eu mattis sapien. Curabitur varius purus sit amet ornare ultricies. Fusce massa augue, rutrum et tellus vitae, accumsan mollis mauris. Morbi ac felis in justo vulputate bibendum. Praesent porta, turpis sollicitudin tincidunt malesuada, leo lorem mollis diam, quis commodo magna nisi vel sapien. Donec dolor elit, congue at viverra quis, viverra quis eros. Donec convallis iaculis luctus. Cras non dui ultrices orci porta tristique. Suspendisse eget suscipit dolor, ac eleifend nisl. Vestibulum a dolor vitae nulla ornare vestibulum elementum non elit. Nulla a augue lacus.

                    Proin sodales auctor magna iaculis accumsan. Integer eget ullamcorper ipsum. Aliquam vitae tristique est. Suspendisse malesuada tristique mollis. Fusce non dapibus felis. Sed quis egestas quam, sit amet tincidunt dui. Duis ullamcorper arcu eget sapien laoreet tincidunt. Aliquam quis convallis libero, vitae dictum ligula.

                    Vestibulum luctus iaculis tellus, eu finibus justo bibendum non. Sed nulla elit, maximus in tellus sed, accumsan tempus libero. Quisque condimentum odio vel augue mattis, quis commodo massa placerat. Vestibulum pretium tempor magna vitae ultrices. Donec ornare, tellus eu rhoncus ultricies, turpis lectus scelerisque sapien, ut efficitur metus risus vitae tellus. Phasellus feugiat rhoncus placerat. Praesent pellentesque magna eget elit faucibus, eu pulvinar enim rhoncus. Sed quis rhoncus tortor, vel interdum ligula. Aenean aliquet, ipsum id consequat bibendum, justo ante bibendum eros, a dapibus lacus arcu ut nisl. Pellentesque ex neque, varius non molestie et, rhoncus a turpis. Nam rhoncus nunc ac egestas pretium. Suspendisse ut magna accumsan, vestibulum sem porta, ultrices nulla. Sed malesuada metus quis sapien suscipit, id luctus orci vehicula. Pellentesque a tincidunt lectus. Nulla porta iaculis ex, sit amet sagittis ipsum lobortis ut. Sed porta, purus eu consequat molestie, metus nisi scelerisque felis, quis convallis nisi orci sit amet ipsum.</p>
            </article>

        ]}
    />
);
