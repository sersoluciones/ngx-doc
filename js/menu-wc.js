'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@sersol/ngx documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Escribe para buscar"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Comenzando</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Descripción general
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>Léeme
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencias
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Módulos</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AwsModule.html" data-type="entity-link">AwsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FacebookSDKModule.html" data-type="entity-link">FacebookSDKModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GoogleSDKModule.html" data-type="entity-link">GoogleSDKModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SerFilterModule.html" data-type="entity-link">SerFilterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SerFilterModule-c968cdbe7b9ad993d0eb43bb96eb8c60"' : 'data-target="#xs-components-links-module-SerFilterModule-c968cdbe7b9ad993d0eb43bb96eb8c60"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SerFilterModule-c968cdbe7b9ad993d0eb43bb96eb8c60"' :
                                            'id="xs-components-links-module-SerFilterModule-c968cdbe7b9ad993d0eb43bb96eb8c60"' }>
                                            <li class="link">
                                                <a href="components/AddressColComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddressColComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PinInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PinInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SerFormElementComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerFormElementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SerFilterModule-c968cdbe7b9ad993d0eb43bb96eb8c60"' : 'data-target="#xs-directives-links-module-SerFilterModule-c968cdbe7b9ad993d0eb43bb96eb8c60"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directivas</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SerFilterModule-c968cdbe7b9ad993d0eb43bb96eb8c60"' :
                                        'id="xs-directives-links-module-SerFilterModule-c968cdbe7b9ad993d0eb43bb96eb8c60"' }>
                                        <li class="link">
                                            <a href="directives/GrowOnInputDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">GrowOnInputDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SerControlDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerControlDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SerErrorDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerErrorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SerErrorsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerErrorsDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SerFormModule.html" data-type="entity-link">SerFormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SerFormModule-4cd73bbccf0a58be13637a371a6b6948"' : 'data-target="#xs-components-links-module-SerFormModule-4cd73bbccf0a58be13637a371a6b6948"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SerFormModule-4cd73bbccf0a58be13637a371a6b6948"' :
                                            'id="xs-components-links-module-SerFormModule-4cd73bbccf0a58be13637a371a6b6948"' }>
                                            <li class="link">
                                                <a href="components/AddressColComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddressColComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PinInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PinInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SerFormElementComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerFormElementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SerFormModule-4cd73bbccf0a58be13637a371a6b6948"' : 'data-target="#xs-directives-links-module-SerFormModule-4cd73bbccf0a58be13637a371a6b6948"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directivas</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SerFormModule-4cd73bbccf0a58be13637a371a6b6948"' :
                                        'id="xs-directives-links-module-SerFormModule-4cd73bbccf0a58be13637a371a6b6948"' }>
                                        <li class="link">
                                            <a href="directives/GrowOnInputDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">GrowOnInputDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SerControlDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerControlDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SerErrorDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerErrorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SerErrorsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerErrorsDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SerSelectModule.html" data-type="entity-link">SerSelectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SerSelectModule-a4373a90dcf9ef5157883d645dd05dd5"' : 'data-target="#xs-components-links-module-SerSelectModule-a4373a90dcf9ef5157883d645dd05dd5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SerSelectModule-a4373a90dcf9ef5157883d645dd05dd5"' :
                                            'id="xs-components-links-module-SerSelectModule-a4373a90dcf9ef5157883d645dd05dd5"' }>
                                            <li class="link">
                                                <a href="components/AddressColComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddressColComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PinInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PinInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SerFormElementComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerFormElementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SerSelectModule-a4373a90dcf9ef5157883d645dd05dd5"' : 'data-target="#xs-directives-links-module-SerSelectModule-a4373a90dcf9ef5157883d645dd05dd5"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directivas</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SerSelectModule-a4373a90dcf9ef5157883d645dd05dd5"' :
                                        'id="xs-directives-links-module-SerSelectModule-a4373a90dcf9ef5157883d645dd05dd5"' }>
                                        <li class="link">
                                            <a href="directives/GrowOnInputDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">GrowOnInputDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SerControlDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerControlDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SerErrorDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerErrorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SerErrorsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerErrorsDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SerSelectModule-a4373a90dcf9ef5157883d645dd05dd5"' : 'data-target="#xs-injectables-links-module-SerSelectModule-a4373a90dcf9ef5157883d645dd05dd5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SerSelectModule-a4373a90dcf9ef5157883d645dd05dd5"' :
                                        'id="xs-injectables-links-module-SerSelectModule-a4373a90dcf9ef5157883d645dd05dd5"' }>
                                        <li class="link">
                                            <a href="injectables/DataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SerUiModule.html" data-type="entity-link">SerUiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SerUiModule-3af712c015cf22e3377b90038683dc71"' : 'data-target="#xs-components-links-module-SerUiModule-3af712c015cf22e3377b90038683dc71"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SerUiModule-3af712c015cf22e3377b90038683dc71"' :
                                            'id="xs-components-links-module-SerUiModule-3af712c015cf22e3377b90038683dc71"' }>
                                            <li class="link">
                                                <a href="components/AddressColComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddressColComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PinInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PinInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SerFormElementComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerFormElementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SerUiModule-3af712c015cf22e3377b90038683dc71"' : 'data-target="#xs-directives-links-module-SerUiModule-3af712c015cf22e3377b90038683dc71"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directivas</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SerUiModule-3af712c015cf22e3377b90038683dc71"' :
                                        'id="xs-directives-links-module-SerUiModule-3af712c015cf22e3377b90038683dc71"' }>
                                        <li class="link">
                                            <a href="directives/GrowOnInputDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">GrowOnInputDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SerControlDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerControlDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SerErrorDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerErrorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SerErrorsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerErrorsDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VirtualScrollerModule.html" data-type="entity-link">VirtualScrollerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VirtualScrollerModule-400e60fb60bdcb49780817cd4902cd4d"' : 'data-target="#xs-components-links-module-VirtualScrollerModule-400e60fb60bdcb49780817cd4902cd4d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VirtualScrollerModule-400e60fb60bdcb49780817cd4902cd4d"' :
                                            'id="xs-components-links-module-VirtualScrollerModule-400e60fb60bdcb49780817cd4902cd4d"' }>
                                            <li class="link">
                                                <a href="components/VirtualScrollerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VirtualScrollerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Componentes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/SerFilterComponent.html" data-type="entity-link">SerFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SerSelectComponent.html" data-type="entity-link">SerSelectComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directivas</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/BgImageDirective.html" data-type="entity-link">BgImageDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/CopyToClipboardDirective.html" data-type="entity-link">CopyToClipboardDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/FinishTypingDirective.html" data-type="entity-link">FinishTypingDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/LongPressDirective.html" data-type="entity-link">LongPressDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SDBadgeDirective.html" data-type="entity-link">SDBadgeDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SDBadgeItemDirective.html" data-type="entity-link">SDBadgeItemDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SDItemDirective.html" data-type="entity-link">SDItemDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ToggleClassDirective.html" data-type="entity-link">ToggleClassDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/WhenScrolledDirective.html" data-type="entity-link">WhenScrolledDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Clases</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Color.html" data-type="entity-link">Color</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomValidators.html" data-type="entity-link">CustomValidators</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacebookSDKConfig.html" data-type="entity-link">FacebookSDKConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/GoogleClientConfig.html" data-type="entity-link">GoogleClientConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/GoogleSDKConfig.html" data-type="entity-link">GoogleSDKConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/LeafletMap.html" data-type="entity-link">LeafletMap</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Inyectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AwsService.html" data-type="entity-link">AwsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClaimsService.html" data-type="entity-link">ClaimsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CookiesService.html" data-type="entity-link">CookiesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link">DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DownloadService.html" data-type="entity-link">DownloadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExternalScriptService.html" data-type="entity-link">ExternalScriptService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FacebookSDKService.html" data-type="entity-link">FacebookSDKService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FullscreenService.html" data-type="entity-link">FullscreenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleSDKService.html" data-type="entity-link">GoogleSDKService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MapService.html" data-type="entity-link">MapService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrefersColorSchemeService.html" data-type="entity-link">PrefersColorSchemeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SnackbarService.html" data-type="entity-link">SnackbarService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AwsData.html" data-type="entity-link">AwsData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseValidationModel.html" data-type="entity-link">BaseValidationModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BgImage.html" data-type="entity-link">BgImage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CenterPoint.html" data-type="entity-link">CenterPoint</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DropdownSettings.html" data-type="entity-link">DropdownSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorDetails.html" data-type="entity-link">ErrorDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FacebookUserProfile.html" data-type="entity-link">FacebookUserProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterSettings.html" data-type="entity-link">FilterSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FsDocument.html" data-type="entity-link">FsDocument</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FsDocumentElement.html" data-type="entity-link">FsDocumentElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GoogleUserProfile.html" data-type="entity-link">GoogleUserProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDimensions.html" data-type="entity-link">IDimensions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPageInfo.html" data-type="entity-link">IPageInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IViewport.html" data-type="entity-link">IViewport</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LatLng.html" data-type="entity-link">LatLng</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LatLng2LatLngOptions.html" data-type="entity-link">LatLng2LatLngOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeafletMapOptions.html" data-type="entity-link">LeafletMapOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeafletPadding.html" data-type="entity-link">LeafletPadding</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OpenIdClient.html" data-type="entity-link">OpenIdClient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OpenIdData.html" data-type="entity-link">OpenIdData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RandomPasswordOps.html" data-type="entity-link">RandomPasswordOps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/S3.html" data-type="entity-link">S3</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnackbarOpts.html" data-type="entity-link">SnackbarOpts</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/String.html" data-type="entity-link">String</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VirtualScrollerDefaultOptions.html" data-type="entity-link">VirtualScrollerDefaultOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WrapGroupDimension.html" data-type="entity-link">WrapGroupDimension</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WrapGroupDimensions.html" data-type="entity-link">WrapGroupDimensions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscelánea</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Funciones</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Alias de tipo</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Cobertura de la documentación</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentación generada utilizando <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});