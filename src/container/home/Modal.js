import React from 'react'
import styled from 'styled-components'

const ModalWrap = styled.div`
<div tabindex="-1" class="ant-modal-wrap" role="dialog" aria-labelledby="rcDialogTitle0" style="">
<div role="document" class="ant-modal" style="width: 520px; transform-origin: 171px 171px;">
    <div tabindex="0" aria-hidden="true" style="width: 0px; height: 0px; overflow: hidden; outline: none;"></div>
        <div class="ant-modal-content">
            <button type="button" aria-label="Close" class="ant-modal-close">
                    <span class="ant-modal-close-x">
                        <span role="img" aria-label="close" class="anticon anticon-close ant-modal-close-icon">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                        </span>
                    </span>
            </button>
            <div class="ant-modal-header">
                <div class="ant-modal-title" id="rcDialogTitle0">Basic Modal</div></div><div class="ant-modal-body"><p>Some contents...</p><p>Some contents...</p><p>Some contents...</p></div>
                    <div class="ant-modal-footer">
                        <button type="button" class="ant-btn" ant-click-animating-without-extra-node="false">
                            <span>Cancel</span>
                        </button>
                        <button type="button" class="ant-btn ant-btn-primary">
                            <span>OK</span>
                        </button>
                    </div>
                </div>
            <div tabindex="0" aria-hidden="true" style="width: 0px; height: 0px; overflow: hidden; outline: none;">
        </div>
    </div>
</div>
`

const ModalMask = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    background-color: rgba(0,0,0,.45);
`
const ModalWrap = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    outline: 0;
    -webkit-overflow-scrolling: touch;
    z-index: 1000;
`

const Modal = styled.div`
    width: 520px;
    transform-origin: 171px 171px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: rgba(0,0,0,.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
    pointer-events: none;
    position: relative;
    top: 100px;
    width: auto;
    max-width: calc(100vw - 32px);
    margin: 0 auto;
    padding: 0 0 24px;
   @media(max-width: 767px){
        max-width: calc(100vw - 16px);
        margin: 8px auto;
   }
`
const ModalContent = styled.div`
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-radius: 2px;
    -webkit-box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);
    pointer-events: auto;
`

const ModalClose = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    padding: 0;
    color: rgba(0,0,0,.45);
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    background: 0 0;
    border: 0;
    outline: 0;
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s;
`

const ModalCloseX = styled.div`
    display: block;
    width: 56px;
    height: 56px;
    font-size: 16px;
    font-style: normal;
    line-height: 56px;
    text-align: center;
    text-transform: none;
    text-rendering: auto;
`

const anticon = styled.div`
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
`

const ModalHeader = styled.div`
    padding: 16px 24px;
    color: rgba(0,0,0,.85);
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0;
`

const ModalTitle = styled.div`
    margin: 0;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    word-wrap: break-word;
`

const ModalBody = styled.div`
    padding: 24px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
`

const ModalFooter = styled.div`
    padding: 10px 16px;
    text-align: right;
    background: 0 0;
    border-top: 1px solid #f0f0f0;
    border-radius: 0 0 2px 2px;
`

const ModalButtonClose = styled.button`
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    -webkit-box-shadow: 0 2px 0 rgba(0,0,0,.015);
    box-shadow: 0 2px 0 rgba(0,0,0,.015);
    cursor: pointer;
    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    border-radius: 2px;
    color: rgba(0,0,0,.85);
    background: #fff;
    border: 1px solid #d9d9d9;
`

const ModalButtonSubmit = styled.button`
    color: #fff;
    background: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0,0,0,.12);
    margin-bottom: 0;
    margin-left: 8px;

    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    -webkit-box-shadow: 0 2px 0 rgba(0,0,0,.015);
    box-shadow: 0 2px 0 rgba(0,0,0,.015);
    cursor: pointer;
    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    border-radius: 2px;
    color: rgba(0,0,0,.85);
    background: #fff;
    border: 1px solid #d9d9d9;
`


const Modal = ({ children }) => {
    return (
        <>
        <div class="ant-modal-mask"></div>
          {children}  
        </>
    )
}

export default Modal
