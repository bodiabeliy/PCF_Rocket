import * as React from 'react'
import { NodeExpandOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Tree, TreeNode } from 'react-organizational-chart';

import L3Modules from './L3Modules'

import '../index.css'

/* 
  L2Items - tree component for L2
*/ 
const L2Items = (infoTreeData: any) => {
  let [parentNode, setParentNode] = React.useState<any>([])


/* 
  set default state of components variables
  useState - special React functionality, that allows control all changes thanks setter function (second argument)
*/ 
  const [L2ParentNode, setL2ParentNode] = React.useState<any>([])
  const [isL3ItemsOpen, setIsL3ItemsOpen] = React.useState(false)
  const [parentTrees, setParentTrees] = React.useState<boolean>(false)

  const [selectedParentCategory, setSelectedParentCategory] = React.useState("")
  const [isSelectedParentCategory, setIsSelectedParentCategory] = React.useState<boolean>(false)
  const [isNull, setIsNull] = React.useState(false)


/* 
  function opening Parent (L2) items
  setter functions (setL2parentNode for example), - set new data for current variable
*/ 
  const openParentTrees = (parentCategoryObject: any) => {
   
    for (let parentCategory of parentNode) {  
          
        if (parentCategory.Name == parentCategoryObject.Name) {          
          setL2ParentNode(groupBy(parentCategoryObject.L3Items, "Category"))          
          setSelectedParentCategory(parentCategory.Name)
          setIsSelectedParentCategory(!isSelectedParentCategory)          
        }
    }
  }

/* 
  function grouping existed L2 items categories
*/ 
  const groupBy = (array: any, key: any) => {
    return array.reduce((result: any, currentValue: any) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {})
  };


/* 
  useEffect -  special React finctionality (hooks), that allows set trigger, when data are changed
*/ 
  React.useEffect(() => {
    setParentNode(infoTreeData.props?.L2Items);
  }, [L2ParentNode[0], infoTreeData])


  return (
    <Tree
      lineWidth={'2px'}
      lineColor={'green'}
      lineBorderRadius={'10px'}
      label={
        <Card
          className='infoTreeCard'

        >
          <Meta title={infoTreeData.props?.Name} description={infoTreeData.props?.Description} />
        </Card>
      }
    >

      {

        parentNode?.map((L2Item: any, L2Index: any) => {

          return (
            <TreeNode label={
              <Card
                className='infoTreeCard'

              >
                <Meta
                  avatar={
                    <NodeExpandOutlined onClick={() => openParentTrees(L2Item)} />}
                  title={L2Item.Name}
                  description={L2Item.Description}
                />
                {L2ParentNode && L2Item.Name == selectedParentCategory && isSelectedParentCategory ?
                  <>
                    <TreeNode className='infoTreeCardSubChildren' label={Object.entries(L2ParentNode).map((Categories: any, indx: any) => {                      
                      return (
                        <L3Modules categoryModules={Categories} categoryIndex={indx} categoriesList={L2ParentNode} />
                      )
                    })}>
                    </TreeNode>
                  </> : null
                }
              </Card>
            } />
          )
        }
        )}

    </Tree>
  );
}

export default L2Items;